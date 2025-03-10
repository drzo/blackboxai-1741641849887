import { expect, test } from 'vitest';
import { createPersona, updatePersona, deletePersona, listPersonas } from '../routes/api.persona';

test('Create a new persona', async () => {
  const persona = { name: 'Friendly Bot', tone: 'friendly', preferences: {} };
  const response = createPersona(persona);
  expect(response).toHaveProperty('id');
  expect(response.name).toBe(persona.name);
});

test('Update an existing persona', async () => {
  const persona = createPersona({ name: 'Friendly Bot', tone: 'friendly', preferences: {} });
  const updatedResponse = updatePersona({ ...persona, tone: 'cheerful' });
  expect(updatedResponse.tone).toBe('cheerful');
});

test('Delete a persona', async () => {
  const persona = createPersona({ name: 'Friendly Bot', tone: 'friendly', preferences: {} });
  const deleteResponse = deletePersona(persona.id);
  expect(deleteResponse).toEqual({ message: 'Persona deleted' });
});

test('List all personas', async () => {
  createPersona({ name: 'Friendly Bot', tone: 'friendly', preferences: {} });
  const response = listPersonas();
  expect(Array.isArray(response)).toBe(true);
  expect(response.length).toBeGreaterThan(0);
});
