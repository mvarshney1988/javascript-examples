// export 
// two types of exports: Named Exports and Default Exports. and works with http/s url only
// inline export person.js
export const age = 35;
export const name = "mohit";

// import module 
<script type="module">
import {age, name} from "person.js";
  </script>
