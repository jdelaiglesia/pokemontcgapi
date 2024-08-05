export default function NavBar() {
  return (
    <div className="navbar bg-base-100 h-10%">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Pokémon TCG Showcase</a>
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
