import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar bg-base-200 h-[7vh]">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">
          Pokémon TCG Showcase
        </Link>
        <Link className="btn btn-outline ml-2" href="/set">
          By set
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
