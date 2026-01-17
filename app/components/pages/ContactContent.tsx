import { getContent } from "@/app/i18n/content";
import type { Locale } from "@/app/i18n/locale";
import styles from "@/app/contact/contact.module.css";

export default function ContactContent({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <p className="eyebrow">{content.contact.hero.eyebrow}</p>
            <h1>{content.contact.hero.title}</h1>
            <p className={styles.lead}>{content.contact.hero.lead}</p>
            <div className={styles.contactInfo}>
              <p>
                <strong>{content.contact.hero.info.emailLabel}</strong> :
                Pro.mdjr@gmail.com
              </p>
              <p>
                <strong>{content.contact.hero.info.locationLabel}</strong> :
                {content.contact.hero.info.locationValue}
              </p>
              <p>
                <strong>{content.contact.hero.info.formatLabel}</strong> :
                {content.contact.hero.info.formatValue}
              </p>
            </div>
          </div>
          <form
            className={styles.form}
            action="mailto:Pro.mdjr@gmail.com"
            method="post"
          >
            <label className={styles.label}>
              {content.contact.form.nameLabel}
              <input
                name="name"
                type="text"
                placeholder={content.contact.form.namePlaceholder}
                required
              />
            </label>
            <label className={styles.label}>
              {content.contact.form.emailLabel}
              <input
                name="email"
                type="email"
                placeholder={content.contact.form.emailPlaceholder}
                required
              />
            </label>
            <label className={styles.label}>
              {content.contact.form.subjectLabel}
              <input
                name="subject"
                type="text"
                placeholder={content.contact.form.subjectPlaceholder}
              />
            </label>
            <label className={styles.label}>
              {content.contact.form.messageLabel}
              <textarea
                name="message"
                rows={5}
                placeholder={content.contact.form.messagePlaceholder}
                required
              />
            </label>
            <button type="submit" className="button">
              {content.contact.form.submit}
            </button>
            <p className={styles.formNote}>{content.contact.form.note}</p>
          </form>
        </div>
      </section>
    </main>
  );
}
