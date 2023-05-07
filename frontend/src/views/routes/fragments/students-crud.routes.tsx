import { Route } from 'react-router-dom';

const StudentsCrudRoutes = (
  <Route path='students' element={<h1>Students List</h1>}>
    <Route path=':studentId' element={<h1>Student page</h1>}>
      <Route path='passport' element={<h1>Student passport</h1>} />
      <Route path='visa' element={<h1>Student visa</h1>} />
      <Route path='migration-card' element={<h1>Student migration card</h1>} />
      <Route path='arrival-notice' element={<h1>Student arrival notice</h1>} />
      <Route path='close-relatives' element={<h1>Student close relatives</h1>} />
    </Route>
  </Route>
);

export default StudentsCrudRoutes;
