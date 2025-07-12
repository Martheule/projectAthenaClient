const SignUp = () => {
  return (
    <div
      className="hero bg-base-200 min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/566862/pexels-photo-566862.jpeg?_gl=1*19jeblz*_ga*OTI2ODEzMDQ2LjE3NDc5OTgyODQ.*_ga_8JE65Q40S6*czE3NTIzMTY5OTkkbzEwJGcxJHQxNzUyMzE3Mjg4JGo1NSRsMCRoMA..)",
      }}
    >
      <div className="hero-content flex-col mb-[15rem]">
        <div className="text-center">
          <h1 className="text-6xl font-bold">Sign Up now!</h1>
          <p className="py-8">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="email" className="input" placeholder="Name" />
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <label className="label">Confirm Password</label>
              <input
                type="confirm-password"
                className="input"
                placeholder="Confirm Password"
              />

              <button className="btn btn-neutral mt-4">Sign Up</button>
              <div className="text-center">
                <a className="link link-hover">
                  Already have and Account? Log in
                </a>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
