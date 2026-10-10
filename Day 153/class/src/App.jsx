import Idk1 from './components/idk1';
import Idk2 from './components/idk2';
import Idk3 from './components/idk3';
import Idk4 from './components/idk4';
import Idk5 from './components/idk5';

const App = () => {
  return (
    <>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <hr />
        <Idk1 />
        <hr />
        <Idk2 />
        <hr />
        <Idk3 />
      </div>

      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h2>Button Resizer</h2>
        <Idk4 />

        <hr style={{ margin: '30px 0' }} />

        <h2>Input Color Changer</h2>
        <Idk5 />
      </div>
    </>
  );
};

export default App;
