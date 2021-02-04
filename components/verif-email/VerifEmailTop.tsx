import * as React from "react";

const VerifEmailTop: React.SFC = () => {
  return (
    <>
      <div className="verif-email-title">
        <h1>Registrasi Akun</h1>
      </div>
      <div className="verif-email-desc">
        <p>
          Terima kasih telah mendaftar, silahkan cek email untuk melihat kode
          keamanan.
        </p>
      </div>
      <style jsx>{`
        .verif-email-title h1 {
          background: linear-gradient(to right, #fe5982, #441985);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 3.5rem;
        }

        .verif-email-desc p {
          color: #9f46a1;
          font-size: 1.25rem;
        }
      `}</style>
    </>
  );
};

export default VerifEmailTop;
