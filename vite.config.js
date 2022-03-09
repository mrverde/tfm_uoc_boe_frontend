import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react()
    ]
})




// import { defineConfig } from 'vite'
// import reactRefresh from '@vitejs/plugin-react-refresh'
// import EnvironmentPlugin from 'vite-plugin-environment'
// import { visualizer } from 'rollup-plugin-visualizer'

// // https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [
//         visualizer(),
//         reactRefresh(),
//         EnvironmentPlugin("all", { prefix: "REACT_APP_" })
//     ],
//     esbuild: {
//         loader: "jsx",
//         include: /src/
//     }
// })