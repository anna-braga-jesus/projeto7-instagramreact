import LadoEsquerdo from "./LadoEsquerdo"
import LadoDireito from "./LadoDireito"

export default function Corpo() {
  return (
    <div>
      <div className="corpo">
        <LadoEsquerdo />
        <LadoDireito />
      </div>
    </div>
  );
}
