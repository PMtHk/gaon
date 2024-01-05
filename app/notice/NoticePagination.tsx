"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface NoticePaginationProps {
  totalPages: number;
  currentPage: number;
}

const NoticePagination = ({
  totalPages,
  currentPage,
}: NoticePaginationProps) => {
  let links: any = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      links.push(
        <PaginationLink
          key={i}
          href={i !== currentPage ? `/notice?page=${i}` : "#"}
          className="text-sm md:text-lg"
          isActive={i === currentPage}
        >
          {i}
        </PaginationLink>
      );
    }
  } else {
    if (currentPage > 3 && currentPage < totalPages - 2) {
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        links.push(
          <PaginationLink
            key={i}
            href={i !== currentPage ? `/notice?page=${i}` : "#"}
            className="text-sm md:text-lg"
            isActive={i === currentPage}
          >
            {i}
          </PaginationLink>
        );
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          links.push(
            <PaginationLink
              key={i}
              href={i !== currentPage ? `/notice?page=${i}` : "#"}
              className="text-sm md:text-lg"
              isActive={i === currentPage}
            >
              {i}
            </PaginationLink>
          );
        }
      } else {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          links.push(
            <PaginationLink
              key={i}
              href={i !== currentPage ? `/notice?page=${i}` : "#"}
              className="text-sm md:text-lg"
              isActive={i === currentPage}
            >
              {i}
            </PaginationLink>
          );
        }
      }
    }
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious
          href={currentPage > 1 ? `/notice?page=${currentPage - 1} ` : "#"}
          className="text-sm md:text-lg"
        />

        {links}

        <PaginationNext
          href={
            currentPage !== totalPages ? `/notice?page=${currentPage + 1}` : "#"
          }
          className="text-sm md:text-lg"
        />
      </PaginationContent>
    </Pagination>
  );
};

export default NoticePagination;
