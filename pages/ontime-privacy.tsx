import Head from "next/head";

export default function OneViewPrivacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - One View Message</title>
        <meta
          name="description"
          content="Privacy Policy for One View Message app"
        />
      </Head>
      <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1>Privacy Policy for One View Message</h1>

        <p>
          One View Message does not collect, store, or share any personal
          information.
        </p>

        <p>
          All text entered by the user is processed locally on the device and
          converted into an image only for the purpose of sharing. No data is
          transmitted to any external servers.
        </p>

        <p>
          We do not use analytics, cookies, advertising services, or third-party
          trackers.
        </p>

        <p>The app does not require account creation or login.</p>

        <p>
          If you have any questions regarding privacy, you may contact us at:{" "}
          <a href="mailto:sericmorales@gmail.com">sericmorales@gmail.com</a>
        </p>
      </main>
    </>
  );
}
