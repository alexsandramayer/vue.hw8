import { createStore } from "vuex";
import ProjectDetailsModule from "./modules/ProjectDetailsModule";

export default createStore({
	modules: {
        ProjectDetailsModule
    }
});