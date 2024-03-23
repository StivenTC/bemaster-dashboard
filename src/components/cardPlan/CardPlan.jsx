
export default function CardPlan() {
  return (
    <section className="card-plan">
      <h2>Mi Plan - Plus</h2>
      <p>El uso se renueva el: 3-may-23</p>

      <div className="bars">
        <div className="bar-item">
          <p>Almacenamiento <span>235 GB/1TB</span></p>
          <div className='bar-graph'>
            <div style={{ width: 120 }} />
          </div>
        </div>

        <div className="bar-item">
          <p>Banda Mensual <span>3.4TB/5TB</span></p>
          <div className='bar-graph'>
            <div style={{ width: 90 }} />
          </div>
        </div>

      </div>

      <button>Administrar plan</button>
    </section>
  );
}
