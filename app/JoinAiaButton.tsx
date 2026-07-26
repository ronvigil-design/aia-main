"use client";

import {
  type FormEvent,
  type KeyboardEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

type JoinAiaButtonProps = {
  children: ReactNode;
  className?: string;
  source?: string;
};

export function JoinAiaButton({
  children,
  className = "",
  source = "AIA Main website",
}: JoinAiaButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => firstFieldRef.current?.focus(), 0);

    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  const openForm = () => {
    const mobileMenu = triggerRef.current?.closest("details");
    if (mobileMenu instanceof HTMLDetailsElement) mobileMenu.open = false;
    setIsOpen(true);
  };

  const handleDialogKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab" || !dialogRef.current) return;

    const focusable = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(
        "button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])",
      ),
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const application = Array.from(formData.entries())
      .map(([key, value]) => {
        const label = key
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        return `${label}: ${String(value)}`;
      })
      .join("\n");

    const subject = encodeURIComponent("AIA Talent Application");
    const body = encodeURIComponent(
      `Hello AIA Talent,\n\nI would like to apply to join AIA.\n\n${application}\n\nThank you.`,
    );
    window.location.href = `mailto:hello@aiatalent.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={className}
        onClick={openForm}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        {children}
      </button>

      {isOpen &&
        createPortal(
          <div
            className="join-modal-backdrop"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setIsOpen(false);
            }}
          >
            <div
              ref={dialogRef}
              className="join-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="join-aia-title"
              onKeyDown={handleDialogKeyDown}
            >
              <button
                type="button"
                className="join-modal-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close Join AIA form"
              >
                ×
              </button>

              <div className="join-modal-heading">
                <p className="section-kicker">Private applications are open</p>
                <h2 id="join-aia-title">Join AIA</h2>
                <p>
                  Tell us about your career, identity, and the opportunities you
                  want to explore.
                </p>
              </div>

              <form className="join-form" onSubmit={handleSubmit}>
                <input type="hidden" name="application-source" value={source} />

                <label>
                  <span>Full name *</span>
                  <input
                    ref={firstFieldRef}
                    type="text"
                    name="full-name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  <span>Professional name</span>
                  <input type="text" name="professional-name" />
                </label>

                <label>
                  <span>Email address *</span>
                  <input
                    type="email"
                    name="email-address"
                    autoComplete="email"
                    required
                  />
                </label>

                <label>
                  <span>Phone number</span>
                  <input
                    type="tel"
                    name="phone-number"
                    autoComplete="tel"
                  />
                </label>

                <label>
                  <span>Type of talent *</span>
                  <select name="type-of-talent" required defaultValue="">
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>Actor or performer</option>
                    <option>Musician</option>
                    <option>Athlete</option>
                    <option>Creator or influencer</option>
                    <option>Broadcaster or author</option>
                    <option>Executive or expert</option>
                    <option>Estate or rights holder</option>
                    <option>Other</option>
                  </select>
                </label>

                <label>
                  <span>Industry *</span>
                  <input type="text" name="industry" required />
                </label>

                <label>
                  <span>Agent or representative</span>
                  <input type="text" name="agent-or-representative" />
                </label>

                <label>
                  <span>Main markets</span>
                  <input
                    type="text"
                    name="main-markets"
                    placeholder="Cities, countries, or regions"
                  />
                </label>

                <label>
                  <span>Areas of interest</span>
                  <select name="areas-of-interest" defaultValue="">
                    <option value="">Select one</option>
                    <option>Talent Twin creation</option>
                    <option>Identity and asset protection</option>
                    <option>Licensing opportunities</option>
                    <option>Global or multilingual projects</option>
                    <option>Legacy planning</option>
                    <option>Complete AIA platform</option>
                  </select>
                </label>

                <label>
                  <span>Existing digital assets</span>
                  <input
                    type="text"
                    name="existing-digital-assets"
                    placeholder="Voice models, scans, avatars, or other assets"
                  />
                </label>

                <label className="join-form-wide">
                  <span>Additional information</span>
                  <textarea name="additional-information" rows={4} />
                </label>

                <div className="join-form-footer join-form-wide">
                  <p>
                    Continuing opens a prepared email to hello@aiatalent.com so
                    you can review the application before sending.
                  </p>
                  <button type="submit" className="button button-gold">
                    Continue Application <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </form>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
