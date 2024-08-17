import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import emailjs from 'emailjs-com';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', phone: '', query: '' };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
      valid = false;
    }

    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
      valid = false;
    }

    if (!formData.query) {
      newErrors.query = 'Query is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      emailjs
        .send(
          import.meta.env.REACT_APP_EMAILJS_SERVICE_ID!,
          import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
          formData,
          import.meta.env.REACT_APP_EMAILJS_USER_ID!
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            setSubmitted(true);
          },
          (error) => {
            console.log('FAILED...', error);
          }
        );
    }
  };

  if (submitted) {
    return <p className="text-center text-green-500 mt-6">Thank you! We will get back to you as soon as possible.</p>;
  }

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
      <form
        className="mx-auto bg-white p-10 shadow-lg rounded-lg"
        onSubmit={handleSubmit}
        style={{ maxWidth: '700px' }}
      >
        <div className="mb-6">
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={Boolean(errors.name)}
            helperText={errors.name || ' '}
          />
        </div>
        <div className="mb-6">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email || ' '}
          />
        </div>
        <div className="mb-6">
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={Boolean(errors.phone)}
            helperText={errors.phone || ' '}
          />
        </div>
        <div className="mb-6">
          <TextField
            label="Inquiry"
            variant="outlined"
            fullWidth
            name="query"
            value={formData.query}
            onChange={handleChange}
            error={Boolean(errors.query)}
            helperText={errors.query || ' '}
            multiline
            rows={8}
            sx={{ minHeight: '150px' }}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ paddingY: '12px', fontWeight: 'bold' }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
