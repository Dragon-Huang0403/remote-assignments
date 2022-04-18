import { Link, useLocation, Outlet } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="about">about</Link>
        <br />
        <Link to="events">events</Link>
        <br />
        <Link to="products">products</Link>
        <br />
        <a href="./about"> test</a>
      </nav>
    </div>
  );
}
export function About() {
  return (
    <div>
      <h1>About</h1>
      <Outlet />
    </div>
  );
}
export function Events() {
  return (
    <div>
      <h1>Events</h1>
    </div>
  );
}
export function Products() {
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
}

export function Service() {
  return (
    <section>
      <h2>Service</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </section>
  );
}
export function History() {
  return (
    <section>
      <h2>History</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </section>
  );
}
export function Location() {
  return (
    <section>
      <h2>Location</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </section>
  );
}
