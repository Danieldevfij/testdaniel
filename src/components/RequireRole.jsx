import React from 'react';

function RequireRole({ role, allowed, children }) {
  // TODO: replace with real RBAC check using auth context
  if (!allowed.includes(role)) {
    return null;
  }
  return <>{children}</>;
}

export default RequireRole;
