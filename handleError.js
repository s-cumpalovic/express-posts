const handleError = (res, err) => {
    res.status(err.status || 500).json({ message: err.message });
  };