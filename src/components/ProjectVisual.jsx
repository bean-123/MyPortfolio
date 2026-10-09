import React from "react";
export default function ProjectVisual({ kind, title }) {
  if (kind === "ellarion")
    return (
      <div
        className="visual visual-ellarion"
        role="img"
        aria-label="Conceptual preview of the Ellarion Tales event website"
      >
        <div className="mini-top">
          ELLARION <span>TALES</span>
          <small>EVENTS · UNIVERSE</small>
        </div>
        <div className="mini-center">
          <span>LIVE-ACTION EXPERIENCES</span>
          <strong>Enter the universe.</strong>
          <i>EXPLORE EVENTS ↗</i>
        </div>
      </div>
    );
  if (kind === "stockflow")
    return (
      <div
        className="visual visual-stockflow"
        role="img"
        aria-label="Conceptual StockFlow inventory dashboard illustration"
      >
        <div className="mini-sidebar">
          SF
          <br />▦<br />▤
        </div>
        <div className="mini-dash">
          <small>STOCKFLOW / OVERVIEW</small>
          <strong>Inventory overview</strong>
          <div className="mini-stats">
            <span />
            <span />
            <span />
          </div>
          <div className="mini-bars">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    );
  return (
    <div
      className="visual visual-linux"
      role="img"
      aria-label="Illustrative Linux terminal showing SSH service status"
    >
      <div className="terminal-head">
        ● ● ● <span>student@workstation — bash</span>
      </div>
      <div className="terminal-body">
        <span>$ ssh student@servera</span>
        <span>$ systemctl status sshd</span>
        <span className="terminal-success">● active (running)</span>
        <span>$ _</span>
      </div>
    </div>
  );
}
