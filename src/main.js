const worker = new Worker("../src/worker.js");

worker.onmessage = e => {
  const message = e.data;
  console.log(`[FROM WORKER]: ${message}`);
};

worker.postMessage("Marco!");
