const API_URL = "http://localhost:3000"; // endereço do backend

const api = {
  // ---------------- USUÁRIOS -----------------
  createUser: async (data) => {
    const res = await fetch(`${API_URL}/usuarios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  getUsers: async () => {
    const res = await fetch(`${API_URL}/usuarios`);
    return res.json();
  },

  // ---------------- LOGIN -----------------
  loginUser: async (data) => {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Siape ou senha incorretos");
    return res.json();
  },

  // ---------------- DOCENTES -----------------
  getDocentes: async () => {
    const res = await fetch(`${API_URL}/docente`);
    return res.json();
  },

  addDocente: async (data) => {
    const res = await fetch(`${API_URL}/docente`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  // ---------------- DISCENTES -----------------
  getDiscentes: async () => {
    const res = await fetch(`${API_URL}/discente`);
    return res.json();
  },

  addDiscente: async (data) => {
    const res = await fetch(`${API_URL}/discente`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  // ---------------- PATRIMÔNIOS -----------------
  getPatrimonios: async () => {
    const res = await fetch(`${API_URL}/patrimonio`);
    return res.json();
  },
};

export default api;
