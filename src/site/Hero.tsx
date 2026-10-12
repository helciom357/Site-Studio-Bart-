import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollToId } from "./scroll";
import { requestService } from "./ui";

// Ponto da porta de entrada na foto da fachada (px da imagem original 1092×1440).
const IMG_W = 1092;
const IMG_H = 1440;
const DOOR_X = 630;
const DOOR_Y = 860;
const POS_Y = 0.62; // object-position vertical durante o zoom
const START_Y = 0.08; // no início, a placa da barbearia aparece no painel de baixo
const TOP = "58%"; // altura do painel Tattoo & laser (produto principal)

const TATTOO_TAGS = ["Tatuagem", "Remoção a laser", "Peeling Hollywood"];
const BARBER_TAGS = ["Corte", "Barba", "Sobrancelha", "Barboterapia"];
const WALL = ["gladiador", "carpa-samurai", "lobos"].map(
  (n) => `${import.meta.env.BASE_URL}images/tattoo/${n}.webp`,
);

export function Hero({ ready }: { ready: boolean }) {
  const section = useRef<HTMLElement>(null);
  const facade = useRef<HTMLImageElement>(null);

  // Mantém o zoom centrado na porta em qualquer proporção de tela.
  useEffect(() => {
    const img = facade.current;
    if (!img) return;
    const place = () => {
      const w = img.clientWidth;
      const h = img.clientHeight;
      const s = Math.max(w / IMG_W, h / IMG_H);
      const offX = (w - IMG_W * s) / 2;
      const offY = (h - IMG_H * s) * POS_Y;
      img.style.transformOrigin = `${offX + DOOR_X * s}px ${offY + DOOR_Y * s}px`;
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, []);

  useEffect(() => {
    const el = section.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);
    const q = gsap.utils.selector(el);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top top", end: "bottom bottom", scrub: 0.6 },
      });
      tl.to(q(".h-top"), { yPercent: -100, duration: 0.2, ease: "power2.inOut" }, 0)
        .to(q(".h-bot"), { yPercent: -30, opacity: 0, duration: 0.12, ease: "power2.in" }, 0)
        .to(q(".h-cue"), { opacity: 0, duration: 0.08 }, 0)
        .fromTo(
          facade.current,
          { objectPosition: `50% ${START_Y * 100}%` },
          { objectPosition: `50% ${POS_Y * 100}%`, duration: 0.2, ease: "power2.inOut" },
          0,
        )
        .to(q(".h-shade"), { opacity: 0, duration: 0.2 }, 0)
        .to(facade.current, { scale: 6, duration: 0.75, ease: "power3.in" }, 0.2)
        .to(q(".h-tint"), { opacity: 0.85, duration: 0.6, ease: "power2.in" }, 0.35)
        .fromTo(
          q(".h-inside"),
          { opacity: 0, scale: 1.35 },
          { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" },
          0.82,
        )
        .fromTo(q(".h-welcome"), { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.15 }, 0.95)
        .to(q(".h-welcome"), { opacity: 0, y: -60, duration: 0.1 }, 1.12)
        .to(q(".h-fade"), { opacity: 1, duration: 0.12 }, 1.1);
    }, el);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!ready || !section.current) return;
    const q = gsap.utils.selector(section.current);
    gsap.fromTo(
      q(".h-line > span"),
      { yPercent: 135 },
      { yPercent: 0, duration: 1.3, stagger: 0.1, ease: "expo.out" },
    );
    gsap.fromTo(
      q(".h-fadein"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, delay: 0.5, ease: "power3.out" },
    );
    gsap.fromTo(facade.current, { scale: 1.15 }, { scale: 1, duration: 2.2, ease: "expo.out" });
  }, [ready]);

  return (
    <section id="inicio" ref={section} className="relative h-[380vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-carvao">
        {/* Fachada: aparece no painel da barbearia e depois recebe o zoom até a porta. */}
        <img
          ref={facade}
          src={`${import.meta.env.BASE_URL}images/fachada.webp`}
          alt="Fachada do Studio Bartô em Perdizes"
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          style={{ objectPosition: `50% ${START_Y * 100}%` }}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-musgo via-musgo/10 to-carvao/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-carvao/80 via-carvao/20 to-transparent" />
        {/* Escurece o painel da barbearia para o texto ficar legível; some no zoom. */}
        <div className="h-shade absolute inset-0 bg-gradient-to-r from-carvao/85 via-carvao/55 to-carvao/75" />
        <div className="h-tint absolute inset-0 bg-carvao opacity-0" />

        <div className="h-inside absolute inset-0 opacity-0">
          <img
            src={`${import.meta.env.BASE_URL}images/team/nicolas-1.webp`}
            alt=""
            className="h-full w-full object-cover blur-[2px]"
          />
          <div className="absolute inset-0 bg-carvao/70" />
        </div>

        <div className="h-welcome absolute inset-0 flex flex-col items-center justify-center px-4 text-center opacity-0">
          <span className="eyebrow text-areia">Seja bem-vindo</span>
          <p className="display mt-4 text-[clamp(3rem,10vw,9rem)] text-creme">
            Entre. <em className="text-cobre">Fique.</em>
          </p>
        </div>

        {/* Barbearia — serviço adicional, painel de baixo. */}
        <div
          className="h-bot absolute inset-x-0 bottom-0 flex items-center"
          style={{ height: `calc(100% - ${TOP})` }}
        >
          <div className="mx-auto grid w-full max-w-[1500px] gap-4 px-4 pb-6 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:px-8 md:pb-0">
            <div>
              <p className="h-fadein eyebrow mb-3 flex items-center gap-3 text-areia md:mb-4">
                <span className="h-px w-8 bg-cobre md:w-10" />
                <span>
                  Também no Bartô<span className="hidden sm:inline"> — Cabelo &amp; barba</span>
                </span>
              </p>
              <h2 className="display text-[clamp(2.5rem,4.6vw,4.8rem)] text-creme">
                <span className="h-line -mb-[0.2em] -ml-[0.06em] block overflow-hidden pb-[0.22em] pl-[0.06em]">
                  <span className="block">
                    Barbe<em className="text-areia">aria</em>
                    <span className="text-cobre">.</span>
                  </span>
                </span>
              </h2>
            </div>
            <div className="h-fadein md:w-[29rem]">
              <p className="hidden max-w-md text-sm leading-relaxed text-creme/80 sm:block md:text-base">
                Corte, barba na navalha e acabamento no detalhe. Cadeira clássica, papo bom.
              </p>
              <ul className="mt-4 hidden flex-wrap gap-2 md:flex">
                {BARBER_TAGS.map((t) => (
                  <li key={t} className="pill border border-creme/30 !text-[0.66rem] text-creme">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-3 md:mt-6">
                <button
                  onClick={() => requestService("barbearia")}
                  className="btn btn-cobre !px-5 !py-3 max-sm:!text-[0.72rem] md:!px-6"
                >
                  Agendar corte
                </button>
                <button
                  onClick={() => scrollToId("barbearia")}
                  className="btn btn-ghost !px-5 !py-3 max-sm:!text-[0.72rem] md:!px-6"
                >
                  Ver barbearia
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tattoo & laser — produto principal, painel de cima. */}
        <div
          className="h-top grain absolute inset-x-0 top-0 overflow-hidden border-b border-creme/15 bg-carvao"
          style={{ height: TOP }}
        >
          <div aria-hidden className="absolute inset-0 grid grid-cols-3">
            {WALL.map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                className="h-full w-full object-cover"
                style={{ objectPosition: "50% 38%" }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-carvao/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-carvao/95 via-carvao/55 to-carvao/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-carvao/70 via-transparent to-carvao/60" />

          <div className="relative mx-auto flex h-full max-w-[1500px] items-end px-4 pb-8 pt-24 md:items-center md:px-8 md:pb-0 md:pt-20">
            <div className="grid w-full gap-5 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
              <div>
                <p className="h-fadein eyebrow mb-3 flex items-center gap-3 text-areia md:mb-5">
                  <span className="h-px w-8 bg-cobre md:w-10" /> Arte na pele — Perdizes, SP
                </p>
                <h1 className="display text-[clamp(3.3rem,7.4vw,8.5rem)] md:whitespace-nowrap text-creme">
                  <span className="h-line -mb-[0.2em] -ml-[0.06em] block overflow-hidden pb-[0.24em] pl-[0.06em]">
                    <span className="block">
                      <em className="text-areia">Tattoo</em> &amp; laser
                      <span className="text-cobre">.</span>
                    </span>
                  </span>
                </h1>
              </div>
              <div className="h-fadein md:w-[29rem]">
                <p className="max-w-md text-sm leading-relaxed text-creme/85 md:text-lg">
                  Tatuagem autoral, remoção a laser e Peeling Hollywood — no mesmo endereço.
                </p>
                <ul className="mt-4 hidden flex-wrap gap-2 sm:flex md:mt-5">
                  {TATTOO_TAGS.map((t) => (
                    <li key={t} className="pill border border-creme/30 !text-[0.66rem] text-creme">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-3 md:mt-7">
                  <button onClick={() => requestService("tatuagem")} className="btn btn-cobre max-sm:!px-5 max-sm:!py-3 max-sm:!text-[0.72rem]">
                    Agendar sessão
                  </button>
                  <button onClick={() => scrollToId("tatuagem")} className="btn btn-ghost max-sm:!px-5 max-sm:!py-3 max-sm:!text-[0.72rem]">
                    Ver estúdio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-cue pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-creme/70 lg:flex">
          <span className="eyebrow !text-[0.62rem]">Role para entrar</span>
          <span className="block h-8 w-px origin-top animate-pulse bg-creme/60" />
        </div>
        <div className="h-fade pointer-events-none absolute inset-0 bg-carvao opacity-0" />
      </div>
    </section>
  );
}
