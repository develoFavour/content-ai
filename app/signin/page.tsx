import React, { Suspense } from "react";
import SignInPage from "./SignInComponent";

const SignIn = () => {
	return (
		<Suspense>
			<SignInPage />
		</Suspense>
	);
};

export default SignIn;
