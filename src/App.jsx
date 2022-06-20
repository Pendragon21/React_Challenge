import { DynamicForm } from './components/DynamicForm';
import './App.css';


function App() {

    const model = [
      {
        id: "form",
        action: "submit",
        method: "post",
        
        input:{
                "id": "input",
                "type": "text",
                "placeholder": "insert a text here..."
        },

        select:{
            "type": "selectcombobox",
            "label": "Role",
            "name": "role",
            "options": [
                { "value": 1, "label": "Developer" },
                { "value": 2, "label": "Scrum Master" },
                { "value": 3, "label": "Team Leader" },
                { "value": 4, "label": "CEO" }
            ]
        },

        ul:{
            "type": "list",
            "label": "Country",
            "name": "country",
            "options": [
                { "value": 1, "label": "India" },
                { "value": 2, "label": "UAE" },
                { "value": 3, "label": "UK" },
                { "value": 4, "label": "US" }
            ]
        }
      }
    ]

  let formJson = model[0]
  
  return (
    <DynamicForm formModels={formJson} />
  );
}

export default App;
