import type { Metadata } from "next";
import styles from "@/app/contact/contact.module.css";

export const metadata: Metadata = {
  title: "Contact freelance Power Platform Paris",
  description:
    "Contactez un freelance Power Platform à Paris pour vos projets Power Platform et automatisation Microsoft 365.",
  openGraph: {
    title: "Contact freelance Power Platform Paris",
    description:
      "Demandez un diagnostic Power Platform pour votre entreprise en Île-de-France.",
    images: ["/og-power-platform-paris.svg"]
  }
};

export default function ContactPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <p className="eyebrow">Contact</p>
            <h1>Discutons de votre projet Power Platform</h1>
            <p className={styles.lead}>
              Indiquez votre contexte et vos objectifs. Je réponds sous 48h avec
              une proposition d'approche et une estimation de charge.
            </p>
            <div className={styles.contactInfo}>
              <p>
                <strong>Email</strong> : Pro.mdjr@gmail.com
              </p>
              <p>
                <strong>Zone</strong> : Paris et Île-de-France
              </p>
              <p>
                <strong>Formats</strong> : Missions courtes et/ou longues
              </p>
            </div>
          </div>
          <form
            className={styles.form}
            action="mailto:Pro.mdjr@gmail.com"
            method="post"
          >
            <label className={styles.label}
              >Nom et entreprise
              <input
                name="name"
                type="text"
                placeholder="Votre nom"
                required
              />
            </label>
            <label className={styles.label}
              >Email professionnel
              <input
                name="email"
                type="email"
                placeholder="prenom@entreprise.fr"
                required
              />
            </label>
            <label className={styles.label}
              >Sujet
              <input
                name="subject"
                type="text"
                placeholder="Power Apps, Power Automate, audit"
              />
            </label>
            <label className={styles.label}
              >Description du besoin
              <textarea
                name="message"
                rows={5}
                placeholder="Décrivez le processus, les équipes impliquées et l'urgence."
                required
              />
            </label>
            <button type="submit" className="button">
              Envoyer la demande
            </button>
            <p className={styles.formNote}>
              Pas de tracking, vos informations restent privées.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
