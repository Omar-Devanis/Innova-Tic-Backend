import conectarBD from "./db/db.ts";

const main = async () => {
    await conectarBD()
};

main();