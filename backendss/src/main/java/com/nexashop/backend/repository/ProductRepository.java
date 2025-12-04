package com.nexashop.backend.repository;

import com.nexashop.backend.entity.Product;
import com.nexashop.backend.entity.ProductStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findBySellerId(Long sellerId);

    List<Product> findByCategory(String category);

    List<Product> findBySellerIdAndStatus(Long sellerId, ProductStatus status);

    List<Product> findBySellerIdAndCategory(Long sellerId, String category);

    List<Product> findBySellerIdAndNameContainingIgnoreCase(Long sellerId, String name);

    List<Product> findByStatus(ProductStatus status);
}
