import React from 'react';

const users = [
  { name: 'Admin', role: 'Beheerder' },
  { name: 'Editor', role: 'Redacteur' },
  { name: 'Viewer', role: 'Lezer' },
];

function UserManagement() {
  return (
    <section id="users" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-8 text-blue-800">User Management</h2>
      {/* TODO: replace with dynamic RBAC data */}
      <div className="max-w-md mx-auto">
        <table className="w-full text-left border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Gebruiker</th>
              <th className="p-2 border">Rol</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.name}>
                <td className="p-2 border">{u.name}</td>
                <td className="p-2 border">{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default UserManagement;
