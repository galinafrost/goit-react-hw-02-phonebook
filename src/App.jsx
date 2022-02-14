import Section from './shared/Section'
import Phonebook from './components/Phonebook/Phonebook'
  
function App() {
  return (
    <div className="container">  
      <Section title="My contacts">
        <Phonebook />
        </Section>
    </div>
  );
}

export default App;