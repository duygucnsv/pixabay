package com.utdbank.projection;

import java.sql.Timestamp;

public interface ProjectModifyInformation {
    String getCreatedBy();

    Timestamp getCreatedDate();

    String getLastModifiedBy();

    Timestamp getLastModifiedDate();
}
