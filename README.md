<div align="center">

# TimeMaster Toolbox (Prototype)

TimeMaster Toolbox is a prototype web application that provides various time-related calculations and utilities. Built with vanilla JavaScript, HTML, and CSS, it offers a simple interface for interacting with the DigiDates API. Please note that this is a work in progress, and the API responses are currently displayed in raw JSON format.

![TimeMaster](https://github.com/user-attachments/assets/d723fa10-88eb-4205-9050-9f08969a5776)

</div>

## Prototype Status

This is currently a prototype/proof of concept with the following limitations:

- API responses are displayed in raw JSON format without formatting
- Basic error handling is implemented but needs refinement
- UI is functional but will be enhanced in future versions
- Mobile responsiveness needs improvement
- Limited input validation

<div align="center">

## ☕ [Support my work on Ko-Fi](https://ko-fi.com/thatsinewave)

</div>

## Current Features

- **Unix Time Conversion**: Convert dates to Unix timestamps
- **Date Validation**: Verify if a date is valid
- **Calendar Week**: Get ISO calendar week numbers for any date
- **Leap Year Check**: Determine if a year is a leap year
- **Countdown Calculator**: Calculate time remaining until a future date
- **Progress Tracker**: Calculate progress between two dates
- **CO² Historical Data**: Find historical years based on CO² concentration levels

## Acknowledgments

- DigiDates API for providing the backend services
- Contributors and testers who help improve this prototype

## Project Structure

```
digitime-toolbox/
│
├── index.html      # Main HTML file
├── styles.css      # Styling
└── scripts.js      # JavaScript functionality
```

## API Integration

The application uses the DigiDates API (https://digidates.de/api/v1). Currently, responses are displayed in raw JSON format. Example response:

```json
{
    "time": 1640995200
}
```

## Planned Improvements

- [ ] Format API responses for better readability
- [ ] Add proper error messages and validation feedback
- [ ] Enhance mobile responsiveness
- [ ] Add loading indicators
- [ ] Improve UI/UX design
- [ ] Add input validation with helpful feedback
- [ ] Add unit tests
- [ ] Add documentation for API endpoints
- [ ] Add examples for each tool
- [ ] Implement proper error boundary

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request.

<div align="center">

## [Join my discord server](https://thatsinewave.github.io/Discord-Redirect/)

</div>

## License

This project is licensed under the [MIT license](LICENSE).
