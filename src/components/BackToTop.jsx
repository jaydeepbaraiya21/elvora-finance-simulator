export default function BackToTop() {
  return (
    <button id={"backToTop"} className={"back-to-top"} onClick={(event) => { window.scrollTo({top:0,behavior:'smooth'}); }} aria-label={"Back to top"} title={"Back to top"}>{"↑"}</button>
  );
}
