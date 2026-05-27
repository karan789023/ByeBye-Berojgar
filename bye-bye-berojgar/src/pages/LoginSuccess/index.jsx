import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginSuccess = () => {

  const navigate = useNavigate();

  useEffect(() => {

    try {

      const params = new URLSearchParams(
        window.location.search
      );

      const token = params.get("token");

      const user = params.get("user");

      console.log("TOKEN 👉", token);
      console.log("USER 👉", user);

      // ❌ No token
      if (!token) {

        console.log("TOKEN NOT FOUND ❌");

        navigate("/login");

        return;

      }

      // ✅ Save token
      localStorage.setItem("token", token);

      // ✅ Save user
      if (user) {

        const parsedUser = JSON.parse(
          decodeURIComponent(user)
        );

        localStorage.setItem(
          "user",
          JSON.stringify(parsedUser)
        );

      }

      console.log("LOGIN SUCCESS ✅");

      // ✅ Redirect Home
      navigate("/", { replace: true });

    } catch (error) {

      console.log(
        "LOGIN ERROR ❌",
        error.message
      );

      navigate("/login");

    }

  }, [navigate]);

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "22px",
        fontWeight: "bold"
      }}
    >
      Logging in...
    </div>

  );

};

export default LoginSuccess;