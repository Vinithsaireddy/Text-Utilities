import React from 'react';

export default function Alert({ alert }) {
  return (
    alert && (
      <div className={`alert alert-${alert.type} d-flex align-items-center`} role="alert">
        <div>
          {alert.msg}
        </div>
      </div>
    )
  );
}
