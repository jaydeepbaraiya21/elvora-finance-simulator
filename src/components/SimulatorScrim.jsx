export default function SimulatorScrim() {
  return (
    <div className={"scrim"} id={"scrim"} onClick={(event) => { window.closeSimulator(); }}></div>
  );
}
