import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";
import getAuthToken from "../util/auth";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("mode") || "login";
  const authToken = getAuthToken();

  //check if mode is valid
  if (mode !== "login" && mode !== "signup") {
    throw json(
      {
        error: "Invalid mode",
      },
      { status: 422 }
    );
  }
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(authData),
  });

  //check if response is valid
  if (response.status === 422 || response.status === 401) {
    return response;
  }

  //check if response is not ok
  if (!response.ok) {
    throw json({ message: "could not authenticate you" }, { status: 500 });
  }

  //token management
  const resData = await response.json();
  const token = resData.token;
  localStorage.setItem("token", token);

  //soon: manage that token
  return redirect("/");
}
