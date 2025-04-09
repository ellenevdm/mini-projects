export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-10">
        Welcome to my mini projects app{" "}
      </h1>
      <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-lg">
          This site was created to sharpen my frontend skills and stay updated
          by building and testing small React projects.
        </p>
        <p>
          <em>
            Please note that this is not yet a styled app. This is just a basic
            app to show off my skills. The styling is still in progress
          </em>
        </p>
      </div>
    </>
  );
}
