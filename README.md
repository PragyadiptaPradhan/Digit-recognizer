# Handwriting Digit Recognizer

A machine learning web application that recognizes handwritten digits (0-9) using a Random Forest classifier trained on the MNIST dataset. The project features both a simple HTML interface and a modern React frontend with an interactive drawing canvas.

## Features

- **Machine Learning Model**: Random Forest classifier trained on MNIST dataset
- **FastAPI Backend**: RESTful API for digit prediction
- **Dual Frontend Options**:
  - Simple HTML interface with file upload
  - React application with interactive drawing canvas
- **Real-time Prediction**: Draw digits and get instant predictions
- **Cross-platform**: Works on desktop and mobile devices

## Project Structure

```
Handwiting-digit-recognizer/
├── main.py                 # FastAPI backend server
├── train_model.py          # Model training script
├── requirements.txt        # Python dependencies
├── index.html             # Simple HTML frontend
├── model.pkl              # Trained ML model (generated)
├── frontend/              # React frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Canvas/
│   │   │   └── Canvas.jsx # Interactive drawing component
│   │   └── main.jsx
│   ├── package.json
│   └── index.html
└── README.md
```

## Technologies Used

### Backend
- **Python 3.x**
- **FastAPI** - Web framework for building APIs
- **scikit-learn** - Machine learning library
- **Pillow (PIL)** - Image processing
- **NumPy** - Numerical computing

### Frontend
- **React 19** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **HTML5 Canvas** - For drawing interface

## Installation & Setup

### Prerequisites
- Python 3.7+
- Node.js 16+ (for React frontend)

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/PragyadiptaPradhan/Handwiting-digit-recognizer.git
   cd Handwiting-digit-recognizer
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv

   # Windows
   venv\Scripts\activate

   # macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Train the model**
   ```bash
   python train_model.py
   ```
   This will download the MNIST dataset and create `model.pkl`

5. **Start the FastAPI server**
   ```bash
   uvicorn main:app --reload
   ```
   Server will be available at `http://127.0.0.1:8000`

### Frontend Setup (React)

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Frontend will be available at `http://localhost:5173`

### Simple HTML Frontend

Alternatively, you can use the simple HTML interface:
1. Ensure the FastAPI server is running
2. Open `index.html` in your browser
3. Upload an image file to get predictions

## Usage

### React Frontend
1. Open the React application in your browser
2. Use the drawing canvas to draw a digit (0-9)
3. Click "Predict" to get the model's prediction
4. Click "Clear" to reset the canvas

### HTML Frontend
1. Open `index.html` in your browser
2. Click "Choose File" to select an image
3. Click "Classify" to get the prediction

### API Endpoints

- `POST /predict-image/`
  - Upload an image file
  - Returns: `{"prediction": <digit>}`

## Model Details

- **Algorithm**: Random Forest Classifier
- **Dataset**: MNIST (70,000 handwritten digits)
- **Input**: 28x28 grayscale images
- **Output**: Digit classification (0-9)
- **Accuracy**: ~97% on test set

## Development

### API Documentation
FastAPI automatically generates interactive API documentation:
- Swagger UI: `http://127.0.0.1:8000/docs`
- ReDoc: `http://127.0.0.1:8000/redoc`

### Building for Production

**React Frontend:**
```bash
cd frontend
npm run build
```

**Python Backend:**
```bash
pip install gunicorn
gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- MNIST dataset from [OpenML](https://www.openml.org/d/554)
- Built with FastAPI and React
- Machine learning powered by scikit-learn

## Contact

**Pragyadipta Pradhan**
- GitHub: [@PragyadiptaPradhan](https://github.com/PragyadiptaPradhan)
- Repository: [Handwiting-digit-recognizer](https://github.com/PragyadiptaPradhan/Handwiting-digit-recognizer)