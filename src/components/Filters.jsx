import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';

const Filters = () => {
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-x-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
      />
      {/* BUTTONS */}
      <buttons type="submit" className="btn btn-primary btn-sm">
        search
      </buttons>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};
export default Filters;
