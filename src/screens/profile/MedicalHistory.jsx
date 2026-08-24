import { useNavigate, useParams } from 'react-router-dom';
import Screen from '../../components/Screen';
import ScreenHeader from '../../components/ScreenHeader';
import { pets, medicalHistory } from '../../data/mockData';

function StatusPill({ status }) {
  const isUpToDate = status === 'Up to date';
  return (
    <span
      className="text-[10px] font-medium rounded px-2 py-1 shrink-0"
      style={{
        color: isUpToDate ? 'var(--color-success)' : 'var(--color-danger)',
        background: isUpToDate ? 'rgba(52,199,89,0.12)' : 'rgba(255,59,48,0.12)',
      }}
    >
      {status}
    </span>
  );
}

export default function MedicalHistory() {
  const navigate = useNavigate();
  const { petId } = useParams();
  const pet = pets.find((p) => p.id === petId) || pets[0];
  const history = medicalHistory[pet.id];

  return (
    <Screen>
      <ScreenHeader title="Medical History" size="md" onBack={() => navigate(`/profile/${pet.id}`)} />
      <div className="px-6 -mt-1 flex items-center gap-2">
        <img src={pet.avatar} alt={pet.name} className="size-6 rounded-full object-cover" />
        <p className="text-xs text-muted">{pet.name} &middot; {pet.breed}</p>
      </div>

      <div className="px-6 mt-5">
        <h2 className="text-sm font-medium text-ink mb-2">Conditions</h2>
        <div className="flex flex-wrap gap-2">
          {history.conditions.map((c) => (
            <span key={c} className="text-xs font-medium text-ink bg-white rounded-full shadow-card px-3 py-1.5">
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 mt-5">
        <h2 className="text-sm font-medium text-ink mb-2">Allergies</h2>
        <div className="flex flex-wrap gap-2">
          {history.allergies.map((a) => (
            <span key={a} className="text-xs font-medium text-ink bg-white rounded-full shadow-card px-3 py-1.5">
              {a}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 mt-5">
        <h2 className="text-sm font-medium text-ink mb-2">Vaccinations</h2>
        <div className="flex flex-col gap-2">
          {history.vaccinations.map((v) => (
            <div key={v.name} className="bg-white rounded-lg shadow-card px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-ink">{v.name}</p>
                <p className="text-[10px] text-muted mt-0.5">{v.date}</p>
              </div>
              <StatusPill status={v.status} />
            </div>
          ))}
        </div>
      </div>

      {history.medications.length > 0 && (
        <div className="px-6 mt-5">
          <h2 className="text-sm font-medium text-ink mb-2">Medications</h2>
          <div className="flex flex-col gap-2">
            {history.medications.map((m) => (
              <div key={m.name} className="bg-white rounded-lg shadow-card px-4 py-3">
                <p className="text-xs font-medium text-ink">{m.name}</p>
                <p className="text-[10px] text-muted mt-0.5">{m.dosage} &middot; since {m.started}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="px-6 mt-5 pb-4">
        <h2 className="text-sm font-medium text-ink mb-2">Visit History</h2>
        <div className="flex flex-col gap-2">
          {history.visits.map((v) => (
            <div key={v.id} className="bg-white rounded-lg shadow-card px-4 py-3">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-ink">{v.title}</p>
                <p className="text-[10px] text-muted">{v.date}</p>
              </div>
              <p className="text-[10px] text-muted mt-0.5">{v.vet}</p>
              <p className="text-[10px] text-ink mt-1.5">{v.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </Screen>
  );
}
