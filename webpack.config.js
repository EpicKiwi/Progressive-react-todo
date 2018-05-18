const path = require("path")

module.exports = {
    mode: "development",
    entry: "./front/js/app.js",                        // Le point d'entrée de l'application front
    output: {                                           // Le resultat de la compilation
        path: path.resolve(__dirname,"front/build"),    // Le chemin vers le dossier contenant le résultat
        filename: "app.js"                              // Le nom du fichier unique javascript front
    },
    module: {                                           // Les modules utilisés durant la compilation
        rules: [                                        // Les regles permettant d'affecter certains fichiers
            {                                           // - Utilisation de babel pour supporter JSX et ES6
                test: /.*\.js/,                         //   Sur tout les fichiers js
                exclude: /node_modules/,                //   Sauf les fichiers de node_modules
                use: {                                  //   On utilise le loader babel
                    loader: "babel-loader",
                    options: {
                        presets: ["react"]              //   On utilise le preset "react" pour supporter le JSX
                    }
                }
            }
        ]
    },
    devtool: "inline-source-map",                       // On active les SourceMap pour un meilleur debugging
    devServer: {
        contentBase: "./front",                         // L'emplacement des fichiers à servir par le serveur de developpement
        overlay: true,                                  // Affiche un overlay quand la configuration foire
    }
}