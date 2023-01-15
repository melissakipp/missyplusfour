package com.missyplusfour.missyplusfour.error;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.Map;

@Data
@NoArgsConstructor
public class ApiError {

    // What fields do we want in our error response
    // When the error occurred
    private long timestamp = new Date().getTime();

    private int status;

    private String message;

    // Get the URL where the error occurred
    private String url;

    private Map<String, String> validationErrors;

    public ApiError(int status, String message, String url) {
        this.status = status;
        this.message = message;
        this.url = url;
    }

}
