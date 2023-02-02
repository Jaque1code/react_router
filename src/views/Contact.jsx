import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <div className="container d-flex justify-content-center">
    <Form className='m-4'>
      <Form.Group className="mb-3  " controlId="formBasicEmail">
        <h2>Cuentanos, ¿en que te podemos ayudar?</h2>
        <Form.Label className='container d-flex justify-content-center'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
     </Form.Group>

     <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
        <Form.Label className='container d-flex justify-content-center'>Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
     <Button className='container d-flex justify-content-center' variant="danger" type="submit">
       Enviar
    </Button>
  </Form>
  </div>
  )
}

export default Contact