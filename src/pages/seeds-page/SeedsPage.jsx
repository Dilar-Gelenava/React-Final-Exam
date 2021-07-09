import { Seed } from '../../services/seeds/Seed';
import { Reset } from '../../services/seeds/Reset';

function SeedsPage() {
  return (
    <div className="d-flex align-items-center justify-content-center m-4">
      <div className="bg-dark rounded p-1">
        <button
          onClick={() => {
            Seed();
            alert('Seeded Successfully');
          }}
          className="btn btn-secondary btn-lg m-2 btn-outline-light">
          Seed( )
        </button>
        <br />
        <button
          onClick={() => {
            Reset();
            alert('Reseted Successfully');
          }}
          className="btn btn-secondary btn-lg m-2 btn-outline-light">
          Reset( )
        </button>
      </div>
    </div>
  );
}

export default SeedsPage;
