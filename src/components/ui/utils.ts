// SPDX-License-Identifier: AGPL-3.0-only
type ClassValue = false | null | undefined | string

export function cx(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ')
}
