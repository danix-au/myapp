// Run with: node --test   (Node >= 18, no dependencies)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const html = readFileSync(fileURLToPath(new URL('../index.html', import.meta.url)), 'utf8');

test('index.html is an HTML5 document', () => {
  assert.match(html, /^<!DOCTYPE html>/i);
  assert.match(html, /<html[^>]*\blang="en"[^>]*>/i);
  assert.match(html, /<meta\s+charset="utf-8"\s*\/?>/i);
  assert.match(html, /<\/html>\s*$/i);
});

test('index.html has a "Hello World" title', () => {
  assert.match(html, /<title>\s*Hello World\s*<\/title>/i);
});

test('index.html shows "Hello World" as the main heading in the body', () => {
  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  assert.ok(body, 'expected a <body> element');
  assert.match(body[1], /<h1[^>]*>\s*Hello World\s*<\/h1>/i);
});
