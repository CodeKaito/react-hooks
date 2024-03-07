import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InstagramPost from './Components/InstagramPost';

function App() {
  return (
    <div className="App">
      <InstagramPost 
        title="@User" 
          image="https://images.pexels.com/photos/19479638/pexels-photo-19479638/free-photo-of-giardino-alberi-parco-marciapiede.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
          desc="Il mio primo post Instagram"
      />
    </div>
  );
}

export default App;
