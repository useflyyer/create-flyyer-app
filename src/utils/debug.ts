import createDebug, { Debugger } from "debug";

/**
 * To enable use: `DEBUG=notabene:* yarn dev`
 */
export const base: Debugger = createDebug("flayyer:create-flayyer-app");

export function namespaced(...namespaces: string[]): Debugger {
  if (namespaces.length > 0) {
    return base.extend(namespaces.join(":"));
  }
  return base;
}

export function censure(secret?: string | null) {
  return "*".repeat((secret || "").length) || undefined;
}

base("created debugger");

export default base;
