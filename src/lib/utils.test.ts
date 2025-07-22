import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('cn', () => {
  it('combina clases simples', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('omite valores falsy', () => {
    expect(cn('foo', false, undefined, null, 'baz')).toBe('foo baz');
  });

  it('combina clases duplicadas usando tailwind-merge', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4');
  });
});
