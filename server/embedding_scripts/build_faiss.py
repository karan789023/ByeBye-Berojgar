# usage: python build_faiss.py
from sentence_transformers import SentenceTransformer
import faiss
import json
import os
from pymongo import MongoClient
import numpy as np

MONGO = os.getenv('MONGO_URI', 'mongodb://localhost:27017/')
client = MongoClient(MONGO)
db = client['byebyeberojgar']
pyq_coll = db['pyqs']

model = SentenceTransformer('all-MiniLM-L6-v2')  # small and fast

docs = list(pyq_coll.find({}))  # add filters
texts = []
ids = []
for d in docs:
    chunk = (d.get('rawText') or '')[:1000]
    if chunk.strip():
        ids.append(str(d['_id']))
        texts.append(chunk)

emb = model.encode(texts, show_progress_bar=True, convert_to_numpy=True)
dim = emb.shape[1]
index = faiss.IndexFlatL2(dim)
index.add(emb)
faiss.write_index(index, 'pyq_index.faiss')
with open('pyq_ids.json','w') as f:
    json.dump(ids, f)
print('Built faiss index with', len(ids), 'items')
