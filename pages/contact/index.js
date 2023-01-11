import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  return (
    <>
      <form>
        <p>Name</p>
        <input type="text" />
        <p>What you want</p>
        <input type="text" />
      </form>
    </>
  );
};

export default Contact;
